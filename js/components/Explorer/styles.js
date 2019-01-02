const ExplorerWindowStyle = {
  windowStyle: {
    position: "absolute",
    border: "2px solid #026bfe",
    borderRadius: "5px",
    overflow: "hidden",
    resize: "both",
    minWidth: "400px",
    minHeight: "200px"
  },

  explorerWrapper: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    width: "100%",
    border: "1px solid rgba(0, 0, 0, 1)",
    borderRadius: "2px"
  },

  explorerToolbar: {
    backgroundColor: "#EFEBD6",
    height: "40px",
    flex: 1,
    minHeight: "40px",
    maxHeight: "40px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: "5px",
    paddingRight: "5px"
  },
  backButtonStyle: {
    width: "50px",
    height: "20px"
  },
  searchbox: {
    margin: 0,
    width: "auto"
  },
  input: {
    paddingLeft: "10px",
    paddingRight: "10px",
    borderRadius: "10px",
    border: "1px solid rgba(0, 0, 0, 0.2)",
    transition: "all 500ms"
  },
  mainView: {
    display: "flex",
    backgroundColor: "white",
    height: "100%",
    width: "100%",
    overflow: "auto",
    "border-bottom-left-radius": "inherit",
    "border-bottom-right-radius": "inherit"
  }
};

const ExplorerTreeStyle = {
  explorerTree: {
    width: "150px",
    maxWidth: "150px",
    minWidth: "150px",
    height: "auto",
    borderRight: "2px solid #EFEBD6",
    paddingLeft: "3px"
  },
  explorerTreeText: {
    cursor: "pointer",
    userSelect: "none"
  },
  explorerTreeIcon: {
    marginRight: "5px",
    width: "14px",
    height: "14px"
  }
};

const ExplorerContentStyle = {
  container: {
    overflow: "scroll",
    overflowX: "hidden",
    backgroundColor: "white",
    width: "100%"
  },
  resultCategories: {
    fontSize: "18px",
    paddingLeft: "2px",
    color: "#415b8e",
    paddingTop: "5px",
    paddingBottom: "5px",
    marginBottom: "5px",
    borderBottom: "0.7px solid #415b8e"
  },
  moreButton: {
    fontSize: "16px",
    cursor: "pointer",
    color: "rgba(21, 108, 217, 0.78)"
  }
};

const ExplorerItemStyle = {
  itemStyle: {
    fontFamily: "Tahoma",
    cursor: "default",
    userSelect: "none",
    boxSizing: "border-box",
    height: "23px",
    width: "100%",
    whiteSpace: "nowrap",
    backgroundColor: "transparent",
    display: "inline-block"
  },
  fileName: {
    userSelect: "none",
    position: "relative",
    display: "inline-block"
  },
  iconWrapper: {
    position: "relative",
    display: "inline-block",
    marginRight: "5px",
    marginLeft: "2px",
    left: 0,
    top: 0,
    width: "14px",
    height: "14px"
  },
  iconBig: {
    position: "relative",
    width: "14px",
    height: "14px"
  },
  iconSmall: {
    position: "absolute",
    width: "8px",
    height: "8px",
    left: "6px",
    top: "6px"
  }
};

export {
  ExplorerWindowStyle,
  ExplorerTreeStyle,
  ExplorerContentStyle,
  ExplorerItemStyle
};