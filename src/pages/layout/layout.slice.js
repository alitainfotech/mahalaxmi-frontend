import { createSlice } from "@reduxjs/toolkit";

export const layoutSlice = createSlice({
  name: "layout",
  initialState: {
    layoutType: "vertical",
    layoutWidth: "fluid",
    leftSideBarTheme: "light",
    leftSideBarType: "default",
    topbarTheme: "colored",
    showRightSidebar: false,
    isMobile: false,
    showSidebar: true,
    leftMenu: false,
  },
  reducers: {
    changeLayout: (state, action) => {
      state.layoutType = action.payload;
      document.body.setAttribute("data-layout", action.payload);
      document.body.classList.add("right-bar-enabled");
      const theme = JSON.parse(localStorage.getItem("theme"));
      if (theme) {
        theme.layoutType = action.payload;
        localStorage.setItem("theme", JSON.stringify(theme));
      }
    },
    changeLayoutWidth: (state, action) => {
      state.layoutWidth = action.payload;
      document.body.setAttribute("data-layout-size", action.payload);
      if (action.payload === "boxed") {
        document.body.classList.add("vertical-collpsed");
      } else {
        document.body.classList.remove("vertical-collpsed");
      }
      const theme = JSON.parse(localStorage.getItem("theme"));
      if (theme) {
        theme.layoutWidth = action.payload;
        localStorage.setItem("theme", JSON.stringify(theme));
      }
    },
    changeSidebarTheme: (state, action) => {
      state.leftSideBarTheme = action.payload;
      document.body.setAttribute("data-sidebar", action.payload);
      const theme = JSON.parse(localStorage.getItem("theme"));
      if (theme) {
        theme.leftSideBarTheme = action.payload;
        localStorage.setItem("theme", JSON.stringify(theme));
      }
    },
    changeSidebarType: (state, action) => {
      state.leftSideBarType = action.payload;
      const theme = JSON.parse(localStorage.getItem("theme"));
      if (theme) {
        theme.leftSideBarType = action.payload;
        localStorage.setItem("theme", JSON.stringify(theme));
      }
    },
    changeTopbarTheme: (state, action) => {
      document.body.setAttribute("data-topbar", action.payload);
      state.topbarTheme = action.payload;
      const theme = JSON.parse(localStorage.getItem("theme"));
      if (theme) {
        theme.topbarTheme = action.payload;
        localStorage.setItem("theme", JSON.stringify(theme));
      }
    },
    showRightSidebarAction: (state, action) => {
      state.showRightSidebar = action.payload;
    },
    showSidebar: (state, action) => {
      state.showSidebar = action.payload;
    },
    toggleLeftmenu: (state, action) => {
      state.leftMenu = action.payload;
    },
  },
});

export const {
  changeLayout,
  changePreloader,
  changeLayoutWidth,
  changeSidebarTheme,
  changeSidebarType,
  changeTopbarTheme,
  showRightSidebarAction,
  showSidebar,
  toggleLeftmenu,
} = layoutSlice.actions;

export default layoutSlice.reducer;
