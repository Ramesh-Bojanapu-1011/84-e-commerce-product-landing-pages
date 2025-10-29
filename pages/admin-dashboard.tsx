import React, { useEffect, useMemo, useState } from "react";
import SiteHeadder from "../src/components/SiteHeadder";
import SiteFooter from "../src/components/SiteFooter";
import { getUsers, User } from "@/lib/localAuth";
import { Users, LogIn, Clock } from "lucide-react"; // Import icons for a modern touch
import { useTranslation } from "react-i18next";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";

// New color palette: primary blue for emphasis, and a set for the pie chart
const PRIMARY_COLOR = "#4F46E5"; // Indigo-600
const CHART_COLORS = ["#4F46E5", "#8B5CF6", "#10B981", "#F59E0B", "#EF4444"]; // Indigo, Violet, Emerald, Amber, Red

function formatDateShort(iso?: string) {
  if (!iso) return "-";
  try {
    const d = new Date(iso);
    return d.toLocaleDateString();
  } catch {
    return iso;
  }
}

// Helper component for the Stat Cards
interface StatCardProps {
  title: string;
  value: number;
  icon: React.ElementType;
  color: string;
}

const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  icon: Icon,
  color,
}) => (
  <div className="p-6 bg-white rounded-xl shadow-lg dark:bg-slate-800 border border-slate-200 dark:border-slate-700 transition hover:shadow-xl">
    <div className="flex items-center justify-between">
      <div
        className={`p-3 rounded-full bg-opacity-10`}
        style={{ backgroundColor: color + "1A" }}
      >
        <Icon className={`w-6 h-6`} style={{ color: color }} />
      </div>
      <div className="text-right">
        <div className="text-3xl font-extrabold text-slate-900 dark:text-white leading-none">
          {value}
        </div>
        <div className="text-sm font-medium text-slate-500 dark:text-slate-400 mt-1">
          {title}
        </div>
      </div>
    </div>
  </div>
);

export default function AdminDashboard() {
  const { t } = useTranslation();
  const [users, setUsers] = useState<User[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const u = getUsers();
    setUsers(u);
  }, []);

  const totalUsers = users.length;
  const loggedUsers = users.filter((u) => !!u.lastLoginTime).length;

  // active: lastLoginTime within past 30 minutes
  const activeUsers = users.filter((u) => {
    if (!u.lastLoginTime) return false;
    const dt = new Date(u.lastLoginTime).getTime();
    return Date.now() - dt < 30 * 60 * 1000;
  }).length;

  // build daily login counts for last 14 days
  const loginSeries = useMemo(() => {
    const map = new Map<string, number>();
    const days = 14;
    for (let i = days - 1; i >= 0; i--) {
      const d = new Date();
      d.setDate(d.getDate() - i);
      const key = d.toLocaleDateString();
      map.set(key, 0);
    }

    users.forEach((u) => {
      if (!u.lastLoginTime) return;
      const key = new Date(u.lastLoginTime).toLocaleDateString();
      if (map.has(key)) map.set(key, (map.get(key) || 0) + 1);
    });

    return Array.from(map.entries()).map(([date, count]) => ({ date, count }));
  }, [users]);

  const pieData = [
    { name: t("admin.pie.logged"), value: loggedUsers },
    {
      name: t("admin.pie.notLogged"),
      value: Math.max(0, totalUsers - loggedUsers),
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100">
      <SiteHeadder />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl flex items-center font-extrabold mb-8 text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-700 pb-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={50}
            height={50}
            viewBox="0 0 32 32"
          >
            <g fill="none">
              <path
                fill="#e1d8ec"
                d="M2 6a4 4 0 0 1 4-4h20a4 4 0 0 1 4 4v20c0 1.48-.804 2.773-2 3.465L26.554 29a4 4 0 0 0-3.014.23L22 30h-3l-3-1.5l-3 1.5h-3l-1.54-.77A4 4 0 0 0 5.446 29L4 29.465A4 4 0 0 1 2 26z"
              ></path>
              <path
                fill="#b4acbc"
                d="M10 11v10H2v1h8v8h1v-8h10v8h1v-8h8v-1h-8V11h8v-1h-8V2h-1v8H11V2h-1v8H2v1zm1 0h10v10H11z"
              ></path>
              <path
                fill="#00d26a"
                d="M6 30h4V10.214C10 9.542 9.453 9 8.774 9H5.226C4.547 9 4 9.542 4 10.213v19.252c.588.34 1.271.535 2 .535"
              ></path>
              <path
                fill="#f70a8d"
                d="M17.774 17h-3.548c-.679 0-1.226.542-1.226 1.214V30h6V18.214c0-.672-.547-1.214-1.226-1.214"
              ></path>
              <path
                fill="#00a6ed"
                d="M22 30h4c.729 0 1.412-.195 2-.535V7.209C28 6.539 27.453 6 26.774 6h-3.548C22.547 6 22 6.54 22 7.209z"
              ></path>
            </g>
          </svg>
          {t("admin.heading")}
        </h1>

        {/* STATS CARDS - Enhanced look with icons and colors */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <StatCard
            title={t("admin.stats.totalUsers")}
            value={totalUsers}
            icon={Users}
            color="#4F46E5"
          />
          <StatCard
            title={t("admin.stats.loggedUsers")}
            value={loggedUsers}
            icon={LogIn}
            color="#10B981"
          />
          <StatCard
            title={t("admin.stats.activeUsers")}
            value={activeUsers}
            icon={Clock}
            color="#F59E0B"
          />
        </section>

        {/* CHARTS SECTION - Cleaned up and better separation */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
          <div className="p-6 bg-white rounded-xl shadow-lg dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
            <h3 className="text-xl font-semibold mb-4 text-slate-700 dark:text-slate-200">
              {t("admin.charts.dailyLogins")}
            </h3>
            <div style={{ width: "100%", height: 300 }}>
              {mounted && (
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart
                    data={loginSeries}
                    margin={{ top: 5, right: 20, left: -10, bottom: 5 }}
                  >
                    {/* Light grid lines for subtle look */}
                    <CartesianGrid
                      strokeDasharray="3 3"
                      stroke="#e2e8f0"
                      className="dark:stroke-slate-700"
                    />
                    <XAxis
                      dataKey="date"
                      tick={{ fontSize: 10 }}
                      stroke={PRIMARY_COLOR}
                    />
                    <YAxis tick={{ fontSize: 12 }} stroke={PRIMARY_COLOR} />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "rgb(30 41 59)",
                        border: "none",
                        borderRadius: "4px",
                      }}
                    />
                    <Line
                      type="monotone"
                      dataKey="count"
                      stroke={PRIMARY_COLOR}
                      strokeWidth={3}
                      dot={{ r: 4, fill: PRIMARY_COLOR, strokeWidth: 2 }}
                      activeDot={{ r: 6 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              )}
            </div>
          </div>

          <div className="p-6 bg-white rounded-xl shadow-lg dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
            <h3 className="text-xl font-semibold mb-4 text-slate-700 dark:text-slate-200">
              {t("admin.charts.userStatus")}
            </h3>
            <div
              style={{ width: "100%", height: 300 }}
              className="flex justify-center items-center"
            >
              {mounted && (
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={pieData}
                      dataKey="value"
                      nameKey="name"
                      cx="50%"
                      cy="50%"
                      //   labelLine={false}
                      label={({
                        name,
                        percent,
                      }: {
                        name?: string;
                        percent?: number;
                      }) =>
                        `${name || ""} (${Math.round((percent || 0) * 100)}%)`
                      } // Better label format
                    >
                      {pieData.map((entries, idx) => (
                        // @ts-ignore dynamic Cell
                        <Cell
                          key={`c-${entries.name}`}
                          fill={CHART_COLORS[idx % CHART_COLORS.length]}
                        />
                      ))}
                    </Pie>
                    <Legend />
                    <Tooltip
                      contentStyle={{
                        // backgroundColor: "rgb(30 41 59)",
                        border: "none",
                        borderRadius: "4px",
                      }}
                    />
                  </PieChart>
                </ResponsiveContainer>
              )}
            </div>
          </div>
        </section>

        {/* USERS TABLE - Stripes and better header look */}
        <section className="bg-white rounded-xl shadow-lg p-6 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
          <h3 className="text-xl font-semibold mb-5 text-slate-700 dark:text-slate-200">
            {t("admin.table.title")}
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="text-sm font-semibold uppercase tracking-wider bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300">
                  <th className="py-3 px-4 rounded-tl-xl">
                    {t("admin.table.name")}
                  </th>
                  <th className="py-3 px-4">{t("admin.table.email")}</th>
                  <th className="py-3 px-4">{t("admin.table.role")}</th>
                  <th className="py-3 px-4">{t("admin.table.registered")}</th>
                  <th className="py-3 px-4">{t("admin.table.lastLogin")}</th>
                  <th className="py-3 px-4 rounded-tr-xl">
                    {t("admin.table.lastLogout")}
                  </th>
                </tr>
              </thead>
              <tbody>
                {users.map((u, idx) => (
                  <tr
                    key={u.email + idx}
                    className="border-t border-slate-100 dark:border-slate-700 text-slate-700 dark:text-slate-300 even:bg-slate-50 dark:even:bg-slate-700/50 hover:bg-slate-100 dark:hover:bg-slate-700 transition duration-150"
                  >
                    <td className="py-3 px-4 font-medium">
                      {`${u.firstname || ""} ${u.lastname || ""}`.trim() || "—"}
                    </td>
                    <td className="py-3 px-4 text-sm">{u.email}</td>
                    <td className="py-3 px-4 text-sm capitalize">
                      {u.role || "user"}
                    </td>
                    <td className="py-3 px-4 text-sm">
                      {formatDateShort(u.registerTime)}
                    </td>
                    <td className="py-3 px-4 text-sm">
                      {formatDateShort(u.lastLoginTime)}
                    </td>
                    <td className="py-3 px-4 text-sm">
                      {formatDateShort(u.lastLogoutTime)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
