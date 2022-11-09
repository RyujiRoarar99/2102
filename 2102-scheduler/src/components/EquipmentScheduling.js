
// import { Link } from "react-router-dom";

import BreadcrumbComponent from "./BreadcrumbComponent";
import Container from "react-bootstrap/Container";

import React, { Component } from "react";
// import ReactDOM from "react-dom";
import { Col, Row } from "reactstrap";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin, { Draggable } from "@fullcalendar/interaction";
import Alert from "sweetalert2";
// import "@fullcalendar/core/main.css";
import "@fullcalendar/daygrid/main.css";
import "@fullcalendar/timegrid/main.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import "./styles.css";
import "./EquipmentScheduling.css"

const breadcrumbs = ["Home", "Equipment Scheduling"];


class EquipmentScheduling extends Component {

    
    state = {
        calendarEvents: [
          {
            title: "Atlanta Monster",
            start: new Date("2019-04-04 00:00"),
            id: "99999998"
          },
          {
            title: "My Favorite Murder",
            start: new Date("2019-04-05 00:00"),
            id: "99999999"
          }
        ],
        events: [
          { title: "Event 1", id: "1" },
          { title: "Event 2", id: "2" },
          { title: "Event 3", id: "3" },
          { title: "Event 4", id: "4" },
          { title: "Event 5", id: "5" },
          { title: "Event 6", id: "6" },
          { title: "Event 7", id: "7" },
          { title: "Event 8", id: "8" },
          { title: "Event 9", id: "9" },
          { title: "Event 5", id: "5" },
          { title: "Event 1", id: "1" },
          { title: "Event 2", id: "2" },
          { title: "Event 3", id: "3" },
          { title: "Event 4", id: "4" },
          { title: "Event 5", id: "5" },
          { title: "Event 6", id: "6" },
          { title: "Event 7", id: "7" },
          { title: "Event 8", id: "8" },
          { title: "Event 9", id: "9" },
          { title: "Event 5", id: "5" },
        ]
      };
    
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
          <table class="table">
          <tbody>
          <tr >
          <td>Title</td>
          <td><strong>` +
            eventClick.event.title +
            `</strong></td>
          </tr>
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
          confirmButtonText: "Remove Event",
          cancelButtonText: "Close"
        }).then(result => {
          if (result.value) {
            eventClick.event.remove(); // It will remove event from the calendar
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
              <Col lg={3} sm={3} md={3}>
                <div
                  id="external-events"
                  style={{
                    padding: "10px",
                    width: "15%",
                    height: "50%",
                    maxHeight: "-webkit-fill-available"
                  }}
                >
                  <p align="center">
                    <strong> Events</strong>
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
              </Col>
      
              <Col lg={9} sm={9} md={9}>
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
            </Row>
          </div>
          </Container>
        );
      }
    }

export default EquipmentScheduling;
