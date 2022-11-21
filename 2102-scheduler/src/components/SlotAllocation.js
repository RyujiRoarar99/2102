import React, { Component,useState,useEffect } from "react";
import Axios from "axios";
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
      existingDates: [],
      dates: [],
      numberOfSlots: "",
      addEvent: "",
    };
    Axios.post("http://localhost:3001/GetScopePerDay").then((response) => {
        if(response.data.length) {
          let dataArray = []
          response.data.map((data,index) => dataArray.push({allDay: true, title: data.slots + " Slots", start: new Date(data.date), id: index+1}))
          this.setState({existingDates: dataArray});
        }
        else {
          this.setState({existingDates: []});
        }
    });
  }

  handleSlots = (slots) => {
    this.setState({
      numberOfSlots: parseInt(slots.nativeEvent.data),
    });
  };

  handleDate = (date) => {
    this.setState({
      date: date
    });
  };

  handleAddEvent = () => {
    let array = [];
    //{date: data.year + "-" + data.month.number + "-" + data.day,slots: this.state.numberOfSlots,filled:0}
    this.state.date.map((data) => array.push([data.year + "-" + data.month.number + "-" + data.day,this.state.numberOfSlots,0])) 
    console.log(array);
    Axios.post("http://localhost:3001/UpdateScopePerDay",
    {date: array,slot1: this.state.numberOfSlots}).then((response) => {
      alert("Data Successfully Sent!");
      window.location.reload();
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
                  events={this.state.existingDates}
                />
              </div>
            </Col>
            <Col lg={2} sm={2} md={2} className="text-center">
              <Card
              style={{
                padding: "10px",
                width: "150%"
                }}>
              <Row>
                <strong> Insert Number of Slots</strong>
              </Row>

                <input
                  placeholder="Choose number of slots"
                  type="number"
                  id="numberofslots"
                  name="numberofslots"
                  min={0}
                  value={this.state.numberOfSlots}
                  onChange={this.handleSlots}
                />
              
              
                <DatePicker
                  placeholder="Choose date(s)"
                  sort
                  multiple
                  plugins={[<DatePanel />]}
                  selected={this.state.date}
                  onChange={this.handleDate}
                />
             
                <Button
                  variant="primary"
                  type="submit"
                  onClick={this.handleAddEvent}
                >
                  Confirm
                </Button>
             
              </Card>
            </Col>
          </Row>
        </div>
      </Container>
    );
  }
}

export default SlotAllocation;
