import http from "k6/http";
import { check, sleep } from "k6";

export let options = {
  stages: [
    { duration: "1m", target: 10 }, // Sobe para 10 VUs em 1 minuto
    { duration: "2m", target: 300 }, // Sobe gradualmente até 300 VUs em 2 minutos
    { duration: "2m", target: 300 }, // Mantém 300 VUs por 2 minutos
  ],
  thresholds: {
    http_req_duration: ["p(95)<5700"], // 95% das respostas abaixo de 5700ms
    http_req_failed: ["rate<0.12"], // Menos de 12% de erro
  },
};

export default function () {
  const res = http.get("https://jsonplaceholder.typicode.com/posts");
  check(res, {
    "status is 200": (r) => r.status === 200,
  });
  sleep(1);
}
