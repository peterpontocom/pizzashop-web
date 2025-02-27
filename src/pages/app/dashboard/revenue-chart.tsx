import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import colors from "tailwindcss/colors";

import {
  ResponsiveContainer,
  LineChart,
  XAxis,
  CartesianGrid,
  Line,
  YAxis,
} from "recharts";

const data = [
  { date: "10/12", revenue: 5000 },
  { date: "11/12", revenue: 400 },
  { date: "13/12", revenue: 3300 },
  { date: "13/12", revenue: 9300 },
  { date: "14/12", revenue: 300 },
  { date: "15/12", revenue: 1200 },
  { date: "13/12", revenue: 7300 },
  { date: "16/12", revenue: 6200 },
];

export function RevenueChart() {
  return (
    <Card className="col-span-6">
      <CardHeader className="flex-row items-center justify-between pb-8">
        <div className="space-y-1">
          <CardTitle className="text-base font-medium">
            Receita de período
          </CardTitle>
          <CardDescription>Receita no período</CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width={"100%"} height={240}>
          <LineChart data={data} style={{ fontSize: 12 }}>
            <XAxis dataKey={"date"} tickLine={false} axisLine={false} dy={6} />
            <YAxis
              stroke="#888"
              axisLine={false}
              tickLine={false}
              width={80}
              tickFormatter={(value: number) =>
                value.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "KZS",
                })
              }
            />
            <CartesianGrid vertical={false} className="stroke-muted" />

            <Line
              type={"linear"}
              strokeWidth={2}
              dataKey={"revenue"}
              stroke={colors.violet["500"]}
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
