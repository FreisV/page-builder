import api from "../http";

export default class DownloadService {
  static async download(projectId) {
    return api
      .get(`/projects/${projectId}/download`, { responseType: "blob" })
      .then((response) => {
        const headers = response.headers;
        const disposition = headers['content-disposition'];
        const rusMatches = /filename\*[^;=\n]*=((['"]).*?\2|[^;\n]*)/.exec(disposition);
        const matches = /filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/.exec(disposition);
        const filename = rusMatches ? decodeURIComponent(rusMatches[1].replace("UTF-8", "").replace(/['"]/g, '')) : matches[1].replace(/['"]/g, '');

        const url = window.URL.createObjectURL(response.data);
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", filename);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      })
      .catch((error) => {
        console.error("Ошибка загрузки файла:", error);
      });
  }
}
