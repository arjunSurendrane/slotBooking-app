const eventData = [
  {
    startDate: "Wed, 03 Mar 2021 04:00:15 GMT",
    endDate: "Wed, 03 Mar 2021 05:00:15 GMT",
  },
  {
    startDate: "Wed, 03 Mar 2021 06:00:15 GMT",
    endDate: "Wed, 03 Mar 2021 06:30:15 GMT",
  },
  {
    startDate: "Wed, 03 Mar 2021 08:30:15 GMT",
    endDate: "Wed, 03 Mar 2021 09:30:15 GMT",
  },
  {
    startDate: "Wed, 03 Mar 2021 09:30:15 GMT",
    endDate: "Wed, 03 Mar 2021 09:50:15 GMT",
  },
  {
    startDate: "Wed, 03 Mar 2021 12:50:15 GMT",
    endDate: "Wed, 03 Mar 2021 13:10:15 GMT",
  },
  {
    startDate: "Wed, 03 Mar 2021 11:30:15 GMT",
    endDate: "Wed, 03 Mar 2021 12:15:15 GMT",
  },
  {
    startDate: "Wed, 03 Mar 2021 13:30:15 GMT",
    endDate: "Wed, 03 Mar 2021 14:00:15 GMT",
  },
  {
    startDate: "Wed, 03 Mar 2021 15:00:15 GMT",
    endDate: "Wed, 03 Mar 2021 15:30:15 GMT",
  },
];

let Events = [];
eventData.map((data) => {
  Events.push({
    startDate: new Date(data.startDate).toJSON(),
    endDate: new Date(data.endDate).toJSON(),
  });
});
export default Events;
