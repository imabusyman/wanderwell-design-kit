import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { DollarSign, TrendingUp } from "lucide-react";

interface BudgetWidgetProps {
  total: number;
  spent: number;
  currency?: string;
}

const BudgetWidget = ({ total, spent, currency = "USD" }: BudgetWidgetProps) => {
  const percentage = (spent / total) * 100;
  const remaining = total - spent;

  return (
    <Card className="p-6 card-elegant">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-bold font-heading">Trip Budget</h3>
          <DollarSign className="h-5 w-5 text-primary" />
        </div>

        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Spent</span>
            <span className="font-semibold">
              ${spent.toLocaleString()} {currency}
            </span>
          </div>
          <Progress value={percentage} className="h-2" />
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Total Budget</span>
            <span className="font-semibold">
              ${total.toLocaleString()} {currency}
            </span>
          </div>
        </div>

        <div className="pt-4 border-t border-border">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <TrendingUp className="h-4 w-4" />
              <span>Remaining</span>
            </div>
            <div className={`text-lg font-bold ${remaining > 0 ? "text-secondary" : "text-destructive"}`}>
              ${remaining.toLocaleString()} {currency}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 pt-4 border-t border-border text-sm">
          <div>
            <div className="text-muted-foreground mb-1">Accommodation</div>
            <div className="font-semibold">${(spent * 0.4).toFixed(0)}</div>
          </div>
          <div>
            <div className="text-muted-foreground mb-1">Transportation</div>
            <div className="font-semibold">${(spent * 0.3).toFixed(0)}</div>
          </div>
          <div>
            <div className="text-muted-foreground mb-1">Food</div>
            <div className="font-semibold">${(spent * 0.2).toFixed(0)}</div>
          </div>
          <div>
            <div className="text-muted-foreground mb-1">Activities</div>
            <div className="font-semibold">${(spent * 0.1).toFixed(0)}</div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default BudgetWidget;
