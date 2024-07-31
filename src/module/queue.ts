import Queue from "bull";
import redisConfig from "../config/redis";
import * as jobs from "../jobs/index";

const queues = Object.values(jobs).map((job) => ({
  bull: new Queue(job.key, { redis: redisConfig }),
  name: job.key,
  handle: job.handle,
  error: job.error,
  //   options: job.options,
}));

export default {
  queues,
  add(name: string, data: any) {
    const queue = this.queues.find((queue) => queue.name === name);
    return queue?.bull.add(data);
  },
  process() {
    return this.queues.forEach((queue) => {
      queue.bull.process(queue.handle);

      queue.bull.on("failed", queue.error);
    });
  },
};
