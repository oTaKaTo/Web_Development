import { Component } from "react";
import "./App.css";

class Header extends Component {
  render() {
    return (
      <h1
        className="Header"
        style={{
          color: "gold",
          display: "flex",
          justifyContent: "center",
        }}
      >
        {this.props.title}
      </h1>
    );
  }
}

class FoodBox extends Component {
  render() {
    return (
      <div
        className="FoodBox-container"
        style={{
          borderColor: "black",
          backgroundColor: "blanchedalmond",
          display: "flex",
          flexDirection: "column",
          borderStyle: "solid",
          borderRadius: "1em",
          width: "65%",
          padding: "24px",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            textOverflow: "ellipsis",
          }}
        >
          <FoodContent
            type={this.props.type}
            name={this.props.name}
            detail={this.props.detail}
          />
          <img
            src={this.props.image}
            alt={this.props.name}
            style={{
              minWidth: "200px",
              width: "25%",
              objectFit: "contain",
              alignSelf: "start",
              paddingLeft: "10px",
            }}
          ></img>
        </div>
        <VoteDisplay />
      </div>
    );
  }
}

class FoodContent extends Component {
  render() {
    return (
      <div
        style={{
          width: "75%",
          display: "-webkit-box",
          WebkitBoxOrient: "vertical",
          overflow: "hidden",
          textOverflow: "ellipsis",
          WebkitLineClamp: "8",
        }}
      >
        <h2>{this.props.type}</h2>
        <h3>{this.props.name}</h3>
        <p>{this.props.detail}</p>
      </div>
    );
  }
}

class VoteButton extends Component {
  buttonClick = () => {
    this.props.clickCallback(this.props.content);
  };
  render() {
    return (
      <button
        onClick={this.buttonClick}
        style={{
          display: "flex",
          textWrap: "nowrap",
          padding: "8px",
          // alignItems:'center'
        }}
      >
        {this.props.content}
      </button>
    );
  }
}

class VoteDisplay extends Component {
  state = { count: 0, txt: "MIN" };

  vote = () => {
    var num = this.state.count;
    num++;
    if (num > 10) {
      alert("Cannot Vote more");
    } else if (num === 10) {
      this.setState({ count: num, txt: "MAX" });
    } else {
      this.setState({ count: num, txt: num.toString() });
    }
  };

  unvote = () => {
    var num = this.state.count;
    num--;
    if (num < 0) {
      alert("Cannot unvote");
    } else if (num === 0) {
      this.setState({ count: num, txt: "MIN" });
    } else {
      this.setState({ count: num, txt: num.toString() });
    }
  };

  render() {
    return (
      <div
        style={{
          display: "flex",
          gap: "14px",
          justifyContent: "center",
          alignItems: "flex-end",
        }}
      >
        <VoteButton
          clickCallback={this.vote}
          content="Click to Vote"
        ></VoteButton>
        <div
          style={{
            display: "flex",
            backgroundColor: "rgb(123, 229, 0)",
            outline: "solid 2px indigo",
            color: "blueviolet",
            height: "30px",
            textAlign: "center",
            fontWeight: "800",
            fontSize: "1.5rem",
            alignItems: "center",
            padding: "8px",
            borderRadius: "8px",
            marginTop: "10px",
          }}
        >
          {this.state.txt}
        </div>
        <VoteButton
          clickCallback={this.unvote}
          content="Click to Unvote"
        ></VoteButton>
      </div>
    );
  }
}

function App() {
  return (
    <div
      className="flex-container"
      style={{
        backgroundColor: "grey",
      }}
    >
      <Header title="โหวตอาหาร" />
      <FoodBox
        type="อาหารคาว"
        name="ข้าวผัด"
        detail="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tristique, nunc ut porttitor lacinia, nibh eros vulputate mi, placerat aliquam orci dolor et lacus. Cras hendrerit dolor id turpis accumsan, et cursus augue porta. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras tincidunt laoreet tincidunt. Sed lacinia magna a nunc fringilla, id tristique nibh aliquet. Praesent a quam quam. Mauris ullamcorper ante ut ligula elementum tincidunt."
        image="https://images.aws.nestle.recipes/resized/16d4cde420f2a4f544df6549e8aea4c3_egg-fired-rice_708_600.jpeg"
      ></FoodBox>
      <FoodBox
        type="อาหารหวาน"
        name="บัวลอย"
        detail="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tristique, nunc ut porttitor lacinia, nibh eros vulputate mi, placerat aliquam orci dolor et lacus. Cras hendrerit dolor id turpis accumsan, et cursus augue porta. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras tincidunt laoreet tincidunt. Sed lacinia magna a nunc fringilla, id tristique nibh aliquet. Praesent a quam quam. Mauris ullamcorper ante ut ligula elementum tincidunt."
        image="https://f.ptcdn.info/557/035/000/1442537793-IMG34862-o.jpg"
      ></FoodBox>
      <FoodBox 
      type="อาหารคาว"
      name="ข้าวมันไก่"
      detail="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tristique, nunc ut porttitor lacinia, nibh eros vulputate mi, placerat aliquam orci dolor et lacus. Cras hendrerit dolor id turpis accumsan, et cursus augue porta. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras tincidunt laoreet tincidunt. Sed lacinia magna a nunc fringilla, id tristique nibh aliquet. Praesent a quam quam. Mauris ullamcorper ante ut ligula elementum tincidunt."
      image="https://static.thairath.co.th/media/dFQROr7oWzulq5Fa4MvAZOQmFYm5g8Akcteb0xDPiuoNHv2rLoCibLWV6bwymaw2TAQ.jpg">

      </FoodBox>
      <FoodBox 
      type="อาหารหวาน"
      name="ลอดช่อง"
      detail="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tristique, nunc ut porttitor lacinia, nibh eros vulputate mi, placerat aliquam orci dolor et lacus. Cras hendrerit dolor id turpis accumsan, et cursus augue porta. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras tincidunt laoreet tincidunt. Sed lacinia magna a nunc fringilla, id tristique nibh aliquet. Praesent a quam quam. Mauris ullamcorper ante ut ligula elementum tincidunt."
      image="https://f.ptcdn.info/287/032/000/1433919781-IMG3046-o.jpg"
      ></FoodBox>
    </div>
  );
}

export default App;
