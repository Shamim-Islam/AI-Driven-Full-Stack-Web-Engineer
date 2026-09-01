interface Response<T> {
  data: T;
  status: number;
}

const transactionResponse: Response<string> = {
  data: "transaction successfull",
  status: 200,
};

const transactionStatus: Response<boolean> = {
  data: false,
  status: 302,
};

const transactionAmount : Response<number> = {
    data: 215,
    status: 403
}

function getLength<item>(array: item[]): number {
    return array.length;
}
