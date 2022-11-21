import React, { Component } from "react";

import BreadcrumbComponent from "./BreadcrumbComponent";

import Container from "react-bootstrap/Container";
import { Col, Row } from "reactstrap";
import { Button, Form } from "react-bootstrap";

// import FullCalendar from "@fullcalendar/react"; // must go before plugins
// import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
// import interactionPlugin from "@fullcalendar/interaction";

// import DatePanel from "react-multi-date-picker/plugins/date_panel";
import DatePicker from "react-multi-date-picker";

const breadcrumbs = ["Home", "Slot Allocation"];

class SlotAllocation extends Component {
//   handleDateClick = (arg) => {
//     // bind with an arrow function
//     alert(arg.dateStr);
//   };

  constructor(props) {
    super(props);
    this.state = {
      today: new Date(),
      tomorrow: new Date(),
    };
    
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    
    this.setDate({ date: e }, {tomorrow: tomorrow.setDate(tomorrow.getDate() + 1) })
  }

//   render() {
//     return (
//       <Container>
//         <BreadcrumbComponent breadcrumbs={breadcrumbs} />

        <div className="animated fadeIn p-4">
          <Row className="justify-content-md-center">
            <Col lg={3} sm={3} md={3}>
              <div
                id="external-events"
                style={{
                  padding: "10px",
                  width: "15%",
                  height: "50%",
                }}
              >
                <p align="center">
                  <strong> Number of Slots</strong>
                </p>
                <div className="App container">
                  <input
                    
                    type="number"
                    id="numberofslots"
                    name="numberofslots"
                    min={0}
                  />

                  <DatePicker multiple value={this.state.date} onChange={this.handleChange} />
                  <Button className="m-t-5" variant="primary" type="submit">
                    Confrim
                  </Button>
                </div>
              </div>
            </Col>

            <Col lg={9} sm={9} md={9}>
              <div className="demo-app-calendar" id="mycalendartest">
                <FullCalendar
                  plugins={[dayGridPlugin, interactionPlugin]}
                  initialView="dayGridMonth"
                  dateClick={this.handleDateClick}
                  events={[
                    { title: "event 1", date: "2022-11-15" },
                    { title: "event 2", date: "2022-11-14" },
                  ]}
                />
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    );
  }
}

export default SlotAllocation;
