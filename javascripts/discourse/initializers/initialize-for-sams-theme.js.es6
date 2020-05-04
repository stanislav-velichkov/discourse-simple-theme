import { withPluginApi } from "discourse/lib/plugin-api";
import { or } from "@ember/object/computed";

export default {
  name: "initialize-for-sams-theme",
  initialize() {
    withPluginApi("0.8.7", api => {
      api.modifyClass("component:topic-list-item", {
        lastPosterUser: or("topic.lastPosterUser", "topic.lastPoster")
      });
    });
  }
};
