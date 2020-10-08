import axios from "axios";

const api = axios.create({
  baseURL: "http://indj-firewall.duckdns.org",
  params: {},
});

export const youtubeApi = {
  search: (term) =>
    api.get("/youtube_api", {
      params: {
        q: encodeURIComponent(term),
      },
    }),
};
export const youtubeCrawlApi = {
  crawl: (youtubeData, inputStr) =>
    api.post("/crawl", {
      channel_id: youtubeData.channelId,
      channel_title: youtubeData.channelTitle,
      description: youtubeData.description,
      published_at: youtubeData.publishedAt,
      thumbnail_default: youtubeData.thumbnailDefault,
      thumbnail_high: youtubeData.thumbnailHigh,
      thumbnail_medium: youtubeData.thumbnailMedium,
      title: youtubeData.title,
      video_id: youtubeData.videoId,
      inputStr: inputStr,
    }),
};
export const getNextCrawledIdx = {
  getNextCrawlIdx: (crawledIdx) =>
    api.post("/stream/nextCrawledIdx", {
      crawledIdx: crawledIdx,
    }),
};
