import { App } from "vue";
import { Button, Form, Field, CellGroup, Search, Swipe, SwipeItem, Tabbar, TabbarItem, Card, PullRefresh,
  Tab, Tabs } from "vant";
const Vant = {
  install: (app: App): void => {
    app.use(Button);
    app.use(Form);
    app.use(Field);
    app.use(CellGroup);
    app.use(Search);
    app.use(Swipe);
    app.use(SwipeItem);
    app.use(Tab);
    app.use(Tabs);
    app.use(Tabbar);
    app.use(TabbarItem);
    app.use(Card);
    app.use(PullRefresh);
  },
};
export default Vant;