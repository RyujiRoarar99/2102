import React, { Component, useState } from "react";
import { Link } from "react-router-dom";

import BreadcrumbComponent from "./BreadcrumbComponent";
import Container from "react-bootstrap/Container";

import { Col, Row } from "reactstrap";
import { Button } from "react-bootstrap";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin, { Draggable } from "@fullcalendar/interaction";
import Alert from "sweetalert2";
// import "@fullcalendar/core/main.css";
import "@fullcalendar/daygrid/main.css";
import "@fullcalendar/timegrid/main.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./SlotAllocation.css";

import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'

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
    this.setState({value: e});
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
                  width: "200px",
                  height: "500px",
                 
                }}
              >
                <p align="center">
                  <strong> Number of Slots</strong>
                </p>
                <div className="App container">
                  <DropdownButton
                    alignRight
                    title={this.handleSelect}
                    id="dropdown-menu-align-right"
                    onSelect={this.handleSelect}
                  >
                    <Dropdown.Item eventKey="option-1">1</Dropdown.Item>
                    <Dropdown.Item eventKey="option-2">2</Dropdown.Item>
                    <Dropdown.Item eventKey="option-3">3</Dropdown.Item>
                    <Dropdown.Item eventKey="option-1">4</Dropdown.Item>
                    <Dropdown.Item eventKey="option-2">5</Dropdown.Item>
                    <Dropdown.Item eventKey="option-3">6</Dropdown.Item>
                    <Dropdown.Item eventKey="option-1">7</Dropdown.Item>
                    <Dropdown.Item eventKey="option-2">8</Dropdown.Item>
                    <Dropdown.Item eventKey="option-3">9</Dropdown.Item>
                  </DropdownButton>
                  
                  <Button className="m-t-5" variant="primary" type="submit">Confrim</Button>
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
