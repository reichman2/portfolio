import React, { MouseEventHandler, ReactChild, ReactChildren } from "react";


type PerspectiveProps = {
  children?: string | ReactChild | ReactChildren | never | never[];
};

type PerspectiveState = {

};

class Perspective extends React.Component<PerspectiveProps, PerspectiveState> {
  constructor(props: PerspectiveProps) {
    super(props);
  }
}
 
export default Perspective;