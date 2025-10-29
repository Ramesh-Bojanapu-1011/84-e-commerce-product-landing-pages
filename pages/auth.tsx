import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import SiteHeadder from "../src/components/SiteHeadder";
import SiteFooter from "../src/components/SiteFooter";
import { ModeToggle } from "@/components/theme/ModeToggle";

type Role = "user" | "admin";

type User = {
  email: string;
  password: string;
  firstname: string;
  lastname: string;
  role?: Role;
  registerTime?: string;
  lastLoginTime?: string;
};

const USERS_KEY = "app_users_v1";
const CURRENT_KEY = "app_current_user_v1";

function readUsers(): User[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(USERS_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    console.error("readUsers error", e);
    return [];
  }
}

function writeUsers(users: User[]) {
  if (typeof window === "undefined") return;
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

function setCurrent(user: User) {
  if (typeof window === "undefined") return;
  localStorage.setItem(CURRENT_KEY, JSON.stringify(user));
}

export default function AuthPage() {
  const router = useRouter();
  const [tab, setTab] = useState<"login" | "register" | "forgot">("login");

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // clear messages when tab changes
    setMessage(null);
    setError(null);
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
  }, [tab]);

  function registerUser(e?: React.FormEvent) {
    e?.preventDefault();
    setError(null);
    if (!email || !password)
      return setError("Email and password are required.");

    const users = readUsers();
    if (users.find((u) => u.email === email)) {
      return setError(
        "A user with this email already exists. Please login or use another email."
      );
    }

    const user: User = {
      email,
      password,
      firstname: firstName,
      lastname: lastName,
      role: "user",
      registerTime: new Date().toISOString(),
    };

    users.push(user);
    writeUsers(users);
    setMessage("Registration successful — you can now log in.");
    // prefill login
    setTab("login");
    setPassword("");
  }

  function loginUser(e?: React.FormEvent) {
    e?.preventDefault();
    setError(null);
    if (!email || !password)
      return setError("Email and password are required.");

    // Admin check
    if (email === "admin@stackly.com" && password === "admin123") {
      const admin: User = {
        email,
        password: "", // don't persist admin password in current snapshot
        role: "admin",
        firstname: "Stackly",
        lastname: "Admin",
        lastLoginTime: new Date().toISOString(),
      };
      setCurrent(admin);
      setMessage("Welcome, admin — redirecting to dashboard...");
      setTimeout(() => router.push("/admin"), 700);
      return;
    }

    const users = readUsers();
    const found = users.find(
      (u) => u.email === email && u.password === password
    );
    if (!found)
      return setError(
        "Invalid credentials — please check email/password or register first."
      );

    found.lastLoginTime = new Date().toISOString();
    // persist updated lastLoginTime
    writeUsers(users);
    setCurrent(found);
    setMessage("Login successful — redirecting to your home...");
    setTimeout(() => router.push("/home1"), 700);
  }

  function startReset(e?: React.FormEvent) {
    e?.preventDefault();
    setError(null);
    if (!email) return setError("Please enter the email you registered with.");
    const users = readUsers();
    const found = users.find((u) => u.email === email);
    if (!found) return setError("Email not found. Please register first.");
    // For demo: allow inline password reset
    setMessage("Enter a new password below to reset.");
    setTab("forgot");
  }

  function completeReset(e?: React.FormEvent) {
    e?.preventDefault();
    setError(null);
    if (!email || !password)
      return setError("Email and new password required.");
    const users = readUsers();
    const idx = users.findIndex((u) => u.email === email);
    if (idx === -1) return setError("Email not found.");
    users[idx].password = password;
    writeUsers(users);
    setMessage("Password reset — you can now log in with the new password.");
    setTab("login");
  }

  return (
    <div className="min-h-screen bg-linear-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800 text-slate-900 dark:text-slate-100 flex flex-col md:py-0 py-10  justify-center items-center">
      <div className=" absolute top-10   right-10 ">
        <ModeToggle />
      </div>
      <img
        src="https://i.postimg.cc/DwdH9gv8/logo-stackly.png"
        alt=""
        width={150}
        height={150}
        className="  "
      />
      <main className=" container mx-auto px-6 py-12">
        <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-2xl overflow-hidden dark:bg-slate-800 dark:shadow-none">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8 bg-linear-to-br from-indigo-600 to-violet-500 dark:from-indigo-700 dark:to-violet-700 text-white caret-transparent">
              <h3 className="text-3xl font-bold">Welcome back</h3>
              <p className="mt-3 opacity-90">
                Sign in to access your purchases, saved items, and faster
                checkout.
              </p>
              <div className="mt-6 space-y-3">
                <div className="text-sm">Quick tips</div>
                <ul className="list-disc list-inside text-sm opacity-90">
                  <li>
                    Use <strong>admin@stackly.com</strong> to access the admin
                    dashboard.
                  </li>
                  <li>
                    Your registration and login time are stored locally in your
                    browser.
                  </li>
                </ul>
              </div>
              <div className="mt-6">
                <div className="inline-flex space-x-2">
                  <button
                    onClick={() => setTab("login")}
                    className={`px-3 py-1 rounded-md font-medium ${
                      tab === "login"
                        ? "bg-white text-violet-600"
                        : "bg-white/10 text-white/90"
                    }`}
                  >
                    Login
                  </button>
                  <button
                    onClick={() => setTab("register")}
                    className={`px-3 py-1 rounded-md font-medium ${
                      tab === "register"
                        ? "bg-white text-violet-600"
                        : "bg-white/10 text-white/90"
                    }`}
                  >
                    Register
                  </button>
                  <button
                    onClick={() => setTab("forgot")}
                    className={`px-3 py-1 rounded-md font-medium ${
                      tab === "forgot"
                        ? "bg-white text-violet-600"
                        : "bg-white/10 text-white/90"
                    }`}
                  >
                    Forgot
                  </button>
                </div>
              </div>
            </div>

            <div className="p-8">
              <div className="max-w-md mx-auto">
                {message && (
                  <div className="mb-4 rounded-md bg-green-50 text-green-800 px-4 py-2 dark:bg-green-900 dark:text-green-200">
                    {message}
                  </div>
                )}
                {error && (
                  <div className="mb-4 rounded-md bg-red-50 text-red-800 px-4 py-2 dark:bg-red-900 dark:text-red-200">
                    {error}
                  </div>
                )}

                {tab === "register" && (
                  <form onSubmit={registerUser} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium">
                        First name
                      </label>
                      <input
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        className="mt-1 block w-full rounded-md border-gray-200 shadow-sm bg-white dark:bg-slate-700 p-3 dark:border-slate-600 dark:text-white"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium">
                        Last name
                      </label>
                      <input
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        className="mt-1 block w-full rounded-md border-gray-200 shadow-sm bg-white dark:bg-slate-700 p-3 dark:border-slate-600 dark:text-white"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium">Email</label>
                      <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        className="mt-1 block w-full rounded-md border-gray-200 shadow-sm bg-white dark:bg-slate-700 p-3 dark:border-slate-600 dark:text-white"
                        placeholder="you@example.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium">
                        Password
                      </label>
                      <input
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        className="mt-1 block w-full rounded-md border-gray-200 shadow-sm bg-white dark:bg-slate-700 p-3 dark:border-slate-600 dark:text-white"
                        placeholder="Choose a strong password"
                      />
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        className="w-full py-2 rounded-md bg-violet-600 text-white font-semibold hover:bg-violet-700 dark:bg-violet-500 dark:hover:bg-violet-600"
                      >
                        Create account
                      </button>
                    </div>
                  </form>
                )}

                {tab === "login" && (
                  <form onSubmit={loginUser} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium">Email</label>
                      <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        className="mt-1 block w-full rounded-md border-gray-200 shadow-sm bg-white dark:bg-slate-700 p-3 dark:border-slate-600 dark:text-white"
                        placeholder="you@example.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium">
                        Password
                      </label>
                      <input
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        className="mt-1 block w-full rounded-md border-gray-200 shadow-sm bg-white dark:bg-slate-700 p-3 dark:border-slate-600 dark:text-white"
                        placeholder="Your password"
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-slate-500 dark:text-slate-300">
                        Don't share your password.
                      </div>
                      <button
                        type="button"
                        onClick={() => setTab("forgot")}
                        className="text-sm text-violet-600"
                      >
                        Forgot?
                      </button>
                    </div>
                    <div>
                      <button
                        type="submit"
                        className="w-full py-2 rounded-md bg-violet-600 text-white font-semibold hover:bg-violet-700 dark:bg-violet-500 dark:hover:bg-violet-600"
                      >
                        Sign in
                      </button>
                    </div>
                  </form>
                )}

                {tab === "forgot" && (
                  <div className="space-y-4">
                    <form onSubmit={startReset} className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium">
                          Registered email
                        </label>
                        <input
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          type="email"
                          className="mt-1 block w-full rounded-md border-gray-200 shadow-sm bg-white dark:bg-slate-700 p-3 dark:border-slate-600 dark:text-white"
                          placeholder="you@example.com"
                        />
                      </div>
                      <div className="flex gap-2">
                        <button
                          type="submit"
                          className="flex-1 py-2 rounded-md bg-violet-500 text-white font-semibold dark:bg-violet-600"
                        >
                          Find account
                        </button>
                        <button
                          type="button"
                          onClick={() => {
                            setTab("login");
                          }}
                          className="flex-1 py-2 rounded-md border border-gray-200 dark:border-slate-600 dark:text-white"
                        >
                          Back
                        </button>
                      </div>
                    </form>

                    {/* If message indicates enter new password, show reset form */}
                    {message?.includes("Enter a new password") && (
                      <form onSubmit={completeReset} className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium">
                            New password
                          </label>
                          <input
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            type="password"
                            className="mt-1 block w-full rounded-md border-gray-200 shadow-sm bg-white dark:bg-slate-700 p-3 dark:border-slate-600 dark:text-white"
                            placeholder="New password"
                          />
                        </div>
                        <div>
                          <button
                            type="submit"
                            className="w-full py-2 rounded-md bg-green-600 text-white font-semibold dark:bg-green-500"
                          >
                            Reset password
                          </button>
                        </div>
                      </form>
                    )}
                  </div>
                )}

                <div className="mt-6 text-center text-sm text-slate-500">
                  By continuing you agree to our{" "}
                  <a className="text-violet-600">Terms</a> and{" "}
                  <a className="text-violet-600">Privacy</a>.
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
