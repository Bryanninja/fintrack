import { Card, CardContent } from './ui/card';

const BalanceItem = ({ icon, label, amount }) => {
  return (
    <Card>
      <CardContent className="flex flex-col space-y-2 p-6">
        <div className="flex items-center gap-2">
          <div className="rounded-lg bg-[#202020] p-2">{icon}</div>
          <p className="text-sm text-gray-600">{label}</p>
        </div>
        <h3 className="text-2xl font-bold">
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(amount)}
        </h3>
      </CardContent>
    </Card>
  );
};

export default BalanceItem;
