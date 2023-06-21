export const getFakeApi = async (): Promise<void> => {
  const result = await fetch('https://jsonplaceholder.typicode.com/todos/1').then((response) => response.json());
  console.log(result);
};

export class SomeClass {
  set: Set<number>;
  channel: BroadcastChannel;

  constructor() {
    this.set = new Set([1]);
    this.channel = new BroadcastChannel('test-broadcast-channel');
  }
}

export type Data = {
  type: 'Money' | 'Percent';
  value: Money | Percent;
};

export type Money = {
  currency: string;
  amount: number;
};

export type Percent = {
  percent: number;
};

function exhaustiveGuard(_type: never): never {
  throw new Error(`ERROR! Reached forbidden guard function with unexpected value: ${JSON.stringify(_type)}`);
}

export const getDataAmount = (data: Data): number => {
  switch (data.type) {
    case 'Money':
      return (data.value as Money).amount;

    case 'Percent':
      return (data.value as Percent).percent;

    default:
      return exhaustiveGuard(data.type);
  }
};
