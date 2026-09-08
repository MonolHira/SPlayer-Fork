import request from "@/utils/request";

// 获取仓库更新日志
export const updateLog = () => {
  return request({
    baseURL: "https://api.github.com",
    withCredentials: false,
    url: "/repos/MonolHira/SPlayer-Fork/releases",
    params: { noCookie: true },
  });
};
