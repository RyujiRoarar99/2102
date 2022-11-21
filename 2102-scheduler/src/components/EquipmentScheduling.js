// import { Link } from "react-router-dom";

import BreadcrumbComponent from "./BreadcrumbComponent";
import Container from "react-bootstrap/Container";

import React, { Component, useState } from "react";
// import ReactDOM from "react-dom";
import { Col, Row } from "reactstrap";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin, { Draggable } from "@fullcalendar/interaction";
import Alert from "sweetalert2";
import Table from 'react-bootstrap/Table';

import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";

// import "@fullcalendar/core/main.css";
import "@fullcalendar/daygrid/main.css";
import "@fullcalendar/timegrid/main.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import "./styles.css";
import "./EquipmentScheduling.css"

const breadcrumbs = ["Home", "Equipment Scheduling"];


class EquipmentScheduling extends Component {
  
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
        filteredSerialNo: "",
        calendarEvents: [
          {
            title: "3",
            start: new Date("2022-04-04"),
            id: "99999998"
          },
          {
            title: "My Favorite Murder",
            start: new Date("2022-04-05"),
            id: "99999999"
          }
        ],
        events: [
          { title: "Scope A1", id: "1" },
          { title: "Scope A2", id: "2" },
          { title: "Scope B1", id: "3" },
          { title: "Scope C3", id: "4" },
          { title: "Scope A4", id: "5" },
          { title: "Scope G4", id: "6" },
          { title: "Scope B5", id: "7" },
          { title: "Scope D1", id: "8" },
          { title: "Scope D2", id: "9" }
        ]

    }
  }

      handleChange = (event) => {
        event.preventDefault();
        this.setState({"filteredSerialNo": event.target.value});
      }
    
    
      componentDidMount() {
        let draggableEl = document.getElementById("external-events");
        new Draggable(draggableEl, {
          itemSelector: ".fc-event",
          eventData: function(eventEl) {
            let title = eventEl.getAttribute("title");
            let id = eventEl.getAttribute("data");
            return {
              title: title,
              id: id
            };
          }
        });
      }
    
      eventClick = eventClick => {
        Alert.fire({
          title: eventClick.event.title,
          html:
            `<div class="table-responsive">
          <table class="table" style="width:100%">
          <table class="table">
          <tbody>
          <tr >
          <td style="width:20%">Scope</td>
          <td>Title</td>
          <td><strong>` +
            eventClick.event.title +
            `</strong></td>
          </tr>
          <tr>
          <td>Date</td>
          <tr >
          <td>Start Time</td>
          <td><strong>
          ` +
            eventClick.event.start +
            `
          </strong></td>
          </tr>
          </tbody>
          </table>
          </div>`,
      
          showCancelButton: true,
          confirmButtonColor: "#d33",
          cancelButtonColor: "#3085d6",
          confirmButtonText: "Remove Scope",
          confirmButtonText: "Remove Event",
          cancelButtonText: "Close"
        }).then(result => {
          if (result.value) {
            eventClick.event.remove(); // It will remove event from the calendar
            Alert.fire("Removed!", "Scope has been removed.", "success");
            Alert.fire("Deleted!", "Your Event has been deleted.", "success");
          }
        });
      };
      
      render() {
        return (
        <Container>
        <BreadcrumbComponent breadcrumbs={breadcrumbs} />
          <div className="animated fadeIn p-4 demo-app">
            <Row>
              <Col lg={9} >
                <div className="demo-app-calendar" id="mycalendartest">
                  <FullCalendar
                    defaultView="dayGridMonth"
                    header={{
                      left: "prev,next today",
                      center: "title",
                      right: "dayGridMonth,timeGridWeek,timeGridDay,listWeek"
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


              <Col id="eventTable" lg={3}>
              <FloatingLabel
                    controlId="floatingSerialNo"
                    label="Equipment Serial No."
                    style={{
                      width: "120%",
                      height: "10%",
                    }}
                >
                    <Form.Control
                        type="text"
                        placeholder="equipment"
                        value= {this.state.filteredSerialNo}
                        onChange={this.handleChange}
                    />
                </FloatingLabel>
                <div
                  id="external-events"
                  className="mb-100"
                  style={{
                    padding: "10px",
                    width: "110%",
                    height: "60%",
                    maxHeight: "-webkit-fill-available"
                  }}
                >
                  <p align="center">
                    <strong> Equipments</strong>
                  </p>
                  {this.state.events.map(event => (
                    <div
                      className="fc-event"
                      title={event.title}
                      data={event.id}
                      key={event.id}
                    >
                      {event.title}
                    </div>
                  ))}
                </div>
                <Table size="sm" id="slotTable"
                className="mt-10"
                  style={{
                    width: "100%",
                    height: "20%",
                    maxHeight: "-webkit-fill-available"
                  }}>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th colSpan={2}>Slots Left:</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>3 slots</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>2 slots</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>4 slots</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>4 slots</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>4 slots</td>
                    </tr>
                  </tbody>
                </Table> 
              </Col>
            </Row>
          </div>
          </Container>
        )}}


export default EquipmentScheduling;