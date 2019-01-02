import React from "react";
import { connect } from "react-redux";
import Rnd from "react-rnd";
import { goPreviousState } from "../../actionCreators";
import {
  searchOnSpotify,
  closeExplorer,
  updatePosition,
  setOnTop,
  updateSize
} from "../../actions/explorer";
import { ExplorerWindowStyle } from "./styles.js";
import backButton from "./images/Back.png";
import ExplorerTree from "./ExplorerTree";
import ExplorerContent from "./ExplorerContent";
import TitleBar from "./TitleBar";

class ExplorerWindow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      width: this.props.explorer.width,
      height: this.props.explorer.height,
      x: 0,
      y: 0,
      searchText: ""
    };
  }

  goBack() {
    this.props.goPreviousState();
  }

  onDragStop(d) {
    const { clientHeight, clientWidth } = document.documentElement;

    const getX = () => {
      if (d.x < 0) return 0;
      if (d.x + Number(this.state.width) > clientWidth)
        return clientWidth - Number(this.state.width);
      return d.x;
    };
    const getY = () => {
      if (d.y < 0) return 0;
      if (d.y + Number(this.state.height) > clientHeight)
        return clientHeight - Number(this.state.height);
      return d.y;
    };

    this.props.updatePosition(getX(), getY());
  }

  render() {
    const {
      explorerToolbar,
      backButtonStyle,
      explorerWrapper,
      searchbox,
      mainView
    } = ExplorerWindowStyle;

    console.log(this.props.explorer.width);

    return (
      <div
        onClick={e => {
          if (e.target.id !== "disallow-on-top") this.props.setOnTop();
        }}
      >
        <Rnd
          enableResizing={{
            top: false,
            right: true,
            bottom: true,
            left: false,
            topRight: false,
            bottomRight: true,
            bottomLeft: false,
            topLeft: false
          }}
          width={this.props.explorer.width}
          height={this.props.explorer.height}
          default={{
            x: 0,
            y: 0,
            width: this.props.explorer.width,
            height: this.props.explorer.height
          }}
          position={{ x: this.props.explorer.x, y: this.props.explorer.y }}
          minWidth={400}
          minHeight={200}
          onResizeStop={(e, direction, ref) => {
            this.props.updateSize(
              ref.style.width.substring(0, ref.style.width.length - 2),
              ref.style.height.substring(0, ref.style.height.length - 2)
            );
          }}
          onDragStop={(e, d) => this.onDragStop(d)}
          enableUserSelectHack
          dragHandleClassName=".title"
        >
          <div
            className="explorer-handle"
            style={{ position: "absolute", height: "100", width: "100%" }}
          />
          <div className="explorer-wrapper" style={explorerWrapper}>
            <TitleBar
              title={this.props.explorer.title}
              onClose={() => {
                if (this.props.explorerId !== 0) {
                  this.props.closeExplorer();
                }
              }}
            />
            <div className="explorer-toolbar" style={explorerToolbar}>
              <img
                className="explorer-toolbar-backbutton"
                src={backButton}
                style={backButtonStyle}
                onClick={() => {
                  if (this.props.explorer.previousStates.length > 1) {
                    this.goBack();
                  }
                }}
              />
              <form
                className="explorer-toolbar-searchbox"
                style={searchbox}
                onSubmit={e => {
                  e.preventDefault();
                  this.props.searchOnSpotify(
                    e.target[0].value,
                    "album,artist,playlist,track",
                    "0"
                  );
                }}
              >
                <input
                  type="text"
                  value={this.state.searchText}
                  onChange={e => this.setState({ searchText: e.target.value })}
                />
              </form>
            </div>
            <div className="explorer-mainview" style={mainView}>
              <ExplorerTree {...this.props} />
              <ExplorerContent {...this.props} />
            </div>
          </div>
        </Rnd>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  playlist: state.playlist,
  explorer: state.explorer.byId[ownProps.explorerId]
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  searchOnSpotify: (search, type, offset) =>
    dispatch(searchOnSpotify(search, type, offset, ownProps.explorerId)),
  goPreviousState: () => dispatch(goPreviousState(ownProps.explorerId)),
  closeExplorer: () => dispatch(closeExplorer(ownProps.explorerId)),
  updatePosition: (x, y) => dispatch(updatePosition(x, y, ownProps.explorerId)),
  updateSize: (width, height) =>
    dispatch(updateSize(width, height, ownProps.explorerId)),
  setOnTop: () => dispatch(setOnTop(ownProps.explorerId))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExplorerWindow);