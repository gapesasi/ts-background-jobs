type Job<T> = {
  key: string;
  handle: (data: any & { data: T }) => void;
  error: (job: any, data: any) => void;
};

export default Job;
