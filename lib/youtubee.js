
  const axios = require('axios');
  
  const baseUrl = "https://line.1010diy.com/";
  const url = "https://" + String.fromCharCode(109, 112, 51, 45, 110, 111, 119) + ".com";
  
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = 0;
  
  class Youtube {
    static async search(query) {
      return new Promise(async (resolve, reject) => {
        try {
          const { data } = await axios.get(baseUrl + "web/free-mp3-finder/query?", {
            params: {
              q: query,
              type: "youtube",
              pageToken: ""
            },
            headers: {
              "User-Agent": 'Mozilla/5.0 (iPhone; CPU iPhone OS 16_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.4 Mobile/15E148 Safari/604.1'
            }
          });
          resolve(data);
        } catch (error) {
          reject(error);
        }
      });
    }
  
    static async download(type, id) {
      return new Promise(async (resolve, reject) => {
        try {
          const { data } = await axios.post(url + "/api/ajax/search", new URLSearchParams({
            query: "https://www.youtube.com/watch?v=" + id,
            v: type
          }));
  
          let links = data.links[type];
          let link = Object.keys(links);
          let k = links[link[0]].k;
          resolve({ vid: id, k });
        } catch (error) {
          reject(error);
        }
      });
    }
  
    static async status({ vid, k }) {
      return new Promise(async (resolve, reject) => {
        try {
          const { data } = await axios.post(url + "/api/ajax/convert", new URLSearchParams({
              vid,
              k
          }));
          resolve(data);
        } catch (error) {
          reject(error);
        }
      });
    }
  }
  
module.exports = Youtube