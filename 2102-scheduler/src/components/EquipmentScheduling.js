// import { Link } from "react-router-dom";

import BreadcrumbComponent from "./BreadcrumbComponent";
import Container from "react-bootstrap/Container";
import Axios from "axios";
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
        scopeSlots: [[]],
        calendarEvents: [],
        equipment: []

    }
    //get all slots
    Axios.post("http://localhost:3001/GetSlotsFromToday").then((response) => {
        if(response.data.length) {
          let slots = [];
          let date = ""
          response.data.map((slot) => {
          date = new Date(slot.date);
          date = date.getFullYear()+'-' + (date.getMonth()+1) + '-'+date.getDate();
          slots.push([date,slot.slots,slot.filled])
          })
          this.setState({scopeSlots: slots});
        }
        else {
            this.setState({scopeSlots: []});
        }
        });
    //get all equipment
    Axios.post("http://localhost:3001/GetAllEquipment").then((response) => {
      if(response.data.length) {
        this.setState({equipment: response.data})
      }
      else {
        this.setState({equipment: []});
      }
      });
    //Get logged equipment
    Axios.post("http://localhost:3001/GetLoggedEquipment").then((response) => {
      if(response.data.length) {
        let array = []
        response.data.map((e) => array.push({allDay: true, title: e.type + " " + e.serial_no, start: new Date(e.date_to_sample),id: e.serial_no, data: [e.type,e.id,e.date_to_sample]}))
        this.setState({calendarEvents: array})
      }
      else {
        this.setState({calendarEvents: []});
      }
    });
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

      dropController = event => {
        let data = event.draggedEl.getAttribute('data').split(",")
        let date = event.dateStr;
        let dateExist = false;
        let index = 0;
        //Find Whether slot exist
        for (var i in this.state.scopeSlots) {
          console.log(this.state.scopeSlots[i][0]);
          if (this.state.scopeSlots[i][0] === date)
          {
            dateExist = true;
            break;
          }
          index += 1;
        }

        //Execute when there is a slot
        if (dateExist) {
          //Check if there is any more slots
          if (this.state.scopeSlots[index][1] !== this.state.scopeSlots[index][2]) {
            let urlString = "";
            // 1. Make a shallow copy of the items
            let scopeSlots = [...this.state.scopeSlots];
            // 2. Make a shallow copy of the item you want to mutate
            let item = [...scopeSlots[index]];
            // 3. Replace the property you're intested in
            item[2] += 1;
            // 4. Put it back into our array. N.B. we *are* mutating the array here, 
            //    but that's why we made a copy first
            scopeSlots[index] = item;
            // 5. Set the state to our new copy
            this.setState({scopeSlots});
            if (data[1] === "Scope") {
              urlString = "http://localhost:3001/InsertScopeLogDate";
            }
            else {
              urlString = "http://localhost:3001/InsertWasherLogDate"
            }
            alert("Succesfully Added");
            Axios.post("http://localhost:3001/AddScopeFilled",{filled: item[2],date: date}).then((response) => {});
            Axios.post(urlString,{scope_id: data[0],date: date}).then((response) => {});
          }
          else {
            alert("Slot is full! Either delete a scope or expand the number of slots!")
            event.remove();
          }
        }
        else {
          alert("No slot assigned for this date! Please go to slot allocation to allocate a slot!");
          event.remove();
        }
      }

      //Delete
      eventClick = eventClick => {
        Alert.fire({
          title: eventClick.event.title,
          html:
            `<div class="table-responsive">
          <table class="table" style="width:100%">
          <table class="table">
          <tbody>
          <strong>
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
          confirmButtonText: "Remove Equipment",
          confirmButtonText: "Remove Equipment",
          cancelButtonText: "Close"
        }).then(result => {
          if (result.value) {
            let data = eventClick.event.extendedProps.data;
            let date = new Date(data[2]);
            date = date.getFullYear()+'-' + (date.getMonth()+1) + '-'+date.getDate();
            let index = 0;
            //Find index for scopeslots
            for (var i in this.state.scopeSlots) {
              console.log(this.state.scopeSlots[i][0]);
              if (this.state.scopeSlots[i][0] === date)
              {
                break;
              }
              index += 1;
            }
            // 1. Make a shallow copy of the items
            let scopeSlots = [...this.state.scopeSlots];
            // 2. Make a shallow copy of the item you want to mutate
            let item = [...scopeSlots[index]];
            // 3. Replace the property you're intested in
            item[2] -= 1;
            // 4. Put it back into our array. N.B. we *are* mutating the array here, 
            //    but that's why we made a copy first
            scopeSlots[index] = item;
            // 5. Set the state to our new copy
            this.setState({scopeSlots});
            let urlString = "";
            if (data[0] === "Scope") {
              urlString = "http://localhost:3001/DeleteScopeLog"
            }
            else {
              urlString = "http://localhost:3001/DeleteWasherLog"
            }
            eventClick.event.remove(); // It will remove event from the calendar
            Alert.fire("Deleted!", "Equipment has been deleted.", "success");
            Axios.post("http://localhost:3001/AddScopeFilled",{filled: item[2],date: date}).then((response) => {});
            Axios.post(urlString,{scope_id: data[1],date: date}).then((response) => {});
            console.log(this.state.scopeSlots);
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
                    drop={this.dropController}
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
                    height: "48%",
                    maxHeight: "-webkit-fill-available"
                  }}
                >
                  <p align="center">
                    <strong> Equipments</strong>
                  </p>
                  {this.state.equipment.map(e => (
                    <div
                      className="fc-event"
                      title={e.item + " " + e.serial_no}
                      data={[e.id,e.item]}
                      key={e.serial_no}
                    >
                      {e.item + " " + e.serial_no}
                    </div>
                  ))}
                </div>
                <Table size="sm" id="slotTable"
                className="mt-2"
                  style={{
                    display:"block",
                    width: "70%",
                    height: "40%",
                    maxHeight: "100%"
                  }}>
                  <thead>
                    <tr>
                      <th>Date</th>
                      <th colSpan={2}>Slots Left:</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.scopeSlots.map((slot)=> <tr><td>{slot[0]}</td><td>{slot[1] - slot[2]}</td></tr>)}
                  </tbody>
                </Table> 
              </Col>
            </Row>
          </div>
          </Container>
        )}}


export default EquipmentScheduling;