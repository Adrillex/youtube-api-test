import {DemoCollection} from "../../../both/collections/demo.collection";
import {Demo} from "../../../both/models/demo.model";
import { playlistInfo } from "../PlaylistsRetriever/PlaylistsRetriever"

export class Main {
  start(): void {
    this.initFakeData();
    this.initFakeData();
    playlistInfo('AIzaSyC4BYAvJGDE4rcxjAxuMYr88k6CWu-93G0', 'PLcBw7Cko_adnbKHLAtt17hy3-Skc7TkDF', Meteor.bindEnvironment(function (items) {
      items.forEach(function (item) {
        console.log(item);
      })
    }))
  }

  initFakeData(): void {
    if (DemoCollection.find({}).cursor.count() === 0) {
      const data: Demo[] = [{
        name: "Dotan",
        age: 25
      }, {
        name: "Liran",
        age: 26
      }, {
        name: "Uri",
        age: 30
      }];
      data.forEach((obj: Demo) => {
        DemoCollection.insert(obj);
      });
    }
  }
}
