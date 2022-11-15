import React, { Component, useState } from "react";
import { Link } from "react-router-dom";

import BreadcrumbComponent from "./BreadcrumbComponent";
import Container from "react-bootstrap/Container";

import { Col, Row } from "reactstrap";
import { Button , Form } from "react-bootstrap";
import FullCalendar, { flexibleCompare } from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin, { Draggable } from "@fullcalendar/interaction";
import Alert from "sweetalert2";
// import "@fullcalendar/core/main.css";
import "@fullcalendar/daygrid/main.css";
import "@fullcalendar/timegrid/main.css";
import "bootstrap/dist/css/bootstrap.min.css";

import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";

const breadcrumbs = ["Home", "Slot Allocation"];

class SlotAllocation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
    };
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(e) {
    console.log(e);
    this.setState({ value: e });
  }

  render() {
    return (
      <Container>
        <BreadcrumbComponent breadcrumbs={breadcrumbs} />
        <div className="animated fadeIn p-4 demo-app">
          <Row>
            <Col lg={3} sm={3} md={3}>
              <div
                id="external-events"
                style={{
                  padding: "10px",
                  width: "10%",
                  height: "15%",
                }}
              >
                <p align="center">
                  <strong> Number of Slots</strong>
                </p>
                <div className="App container">
                  <Form.Select style={{
                    marginBottom: "20px"
                  }}>
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                  </Form.Select>

                  <Button className="m-t-5" variant="primary" type="submit">
                    Confrim
                  </Button>
                </div>
              </div>
            </Col>

            <Col lg={9} sm={9} md={9}>
              <div className="demo-app-calendar" id="mycalendartest">
                <FullCalendar
                  defaultView="dayGridMonth"
                  header={{
                    left: "prev,next Today",
                    center: "title",
                    right: "dayGridMonth,timeGridWeek,timeGridDay,listWeek",
                  }}
                  rerenderDelay={10}
                  eventDurationEditable={false}
                  editable={true}
                  droppable={true}
                  plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                  ref={this.calendarComponentRef}
                  weekends={this.state.calendarWeekends}
                  events={this.state.calendarEvents}
                  eventDrop={this.drop}
                  // drop={this.drop}
                  eventReceive={this.eventReceive}
                  eventClick={this.eventClick}
                  // selectable={true}
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
