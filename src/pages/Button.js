import React from "react";
import { useOverrides } from "@quarkly/components";
import { Button } from "@quarkly/widgets";

const overrides = {
  "Button": {
    "kind": "Button",
    "props": {
      "padding": "6px 12px",
      "text-transform": "uppercase",
      "font-weight": "600",
      "font-size": "14px",
      "line-height": "16px",
      "letter-spacing": "1px",
      "color": "--light",
      "text-decoration": "none",
      "margin": "0px 12px",
      "transition": "color 0.5s ease-in-out",
      "position": "relative",
      "background-color": "--dark",
      "border-radius": "100px",
      "children": [
        {
          "kind": "Text",
          "props": {
            "children": "Button"
          }
        }
      ],
      ":hover": {
        "color": "--accent"
      },
      ":active": {
        "color": "--accent"
      },
      "::before": {
        "content": "''",
        "position": "absolute",
        "width": "100%",
        "height": "100%",
        "top": "0",
        "left": "0",
        "z-index": "-1",
        "background-color": "rgba(0, 0, 0, 0.5)",
        "transition": "opacity 0.3s ease-in-out",
        "opacity": "0",
        "border-radius": "4px"
      },
      ":hover::before": {
        "opacity": "1"
      },
      ":focus::before": {
        "opacity": "1"
      },
      ":active::before": {
        "opacity": "0"
      }
    }
  }
};

const NavbarButton = ({ children, ...props }) => {
  const [hover, setHover] = React.useState(null);
  const { override, rest } = useOverrides(props, overrides);
  return (
    <Button {...override("Button")} {...rest}
      onMouseOver={() => setHover(1)}
      onMouseOut={() => setHover(null)}
      style={{
        backgroundColor: hover === 1 ? "white" : "black",
        color: hover === 1 ? "black" : "white",
        transition: "background-color 0.5s ease-in-out, color 0.3s ease-in-out"
      }}
    >
      {children}
    </Button>
  );
};

export default NavbarButton;