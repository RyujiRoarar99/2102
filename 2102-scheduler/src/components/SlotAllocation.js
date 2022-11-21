import React, { Component } from "react";

import BreadcrumbComponent from "./BreadcrumbComponent";

import Container from "react-bootstrap/Container";
import { Col, Row } from "reactstrap";
import { Button, Card } from "react-bootstrap";

import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import interactionPlugin from "@fullcalendar/interaction";

import DatePanel from "react-multi-date-picker/plugins/date_panel";
import DatePicker from "react-multi-date-picker";

const breadcrumbs = ["Home", "Slot Allocation"];

class SlotAllocation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: [],
      numberOfSlots: "",
      addEvent: "",
    };
  }

  handleSlots = (slots) => {
    this.setState({
      numberOfSlots: slots.target.numberOfSlots,
    });
  };

  handleDate = (date) => {
    this.setState({
      date: []
    });
  };

  handleAddEvent = () => {
    this.setState({
      addEvent: [...this.state.date, this.state.numberOfSlots],
    });
  };

  render() {
    return (
      <Container>
        <BreadcrumbComponent breadcrumbs={breadcrumbs} />

        <div className="animated fadeIn p-4">
          <Row>
            <Col lg={9} sm={9} md={9}>
              <div className="demo-app-calendar" id="mycalendartest">
                <FullCalendar
                  plugins={[dayGridPlugin, interactionPlugin]}
                  initialView="dayGridMonth"
                  events={this.state.addEvent}
                />
              </div>
            </Col>
            <Col lg={2} sm={2} md={2} className="text-center">
              <Card>
              <Row>
                <strong> Insert Number of Slots</strong>
              </Row>

              <Row>
                <input
                  placeholder="Choose number of slots"
                  type="number"
                  id="numberofslots"
                  name="numberofslots"
                  min={0}
                  value={this.state.numberOfSlots}
                  onChange={this.handleSlots}
                />
              </Row>
              <Row>
                <DatePicker
                  placeholder="Choose date(s)"
                  sort
                  multiple
                  plugins={[<DatePanel />]}
                  selected={this.state.date}
                  onChange={this.handleDate}
                />
              </Row>
              <Row>
                <Button
                  variant="primary"
                  type="submit"
                  onClick={this.handleAddEvent}
                >
                  Confrim
                </Button>
              </Row>
              </Card>
            </Col>
          </Row>
        </div>
      </Container>
    );
  }
}

export default SlotAllocation;
