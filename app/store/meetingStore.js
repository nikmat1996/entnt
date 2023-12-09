import { create } from "zustand";

const meetingStore = create((set) => ({
  meetings: [
    {
      id: 1,
      userId: "2",
      date: "22/12/2023",
      time: "2:00 PM",
    },
    {
      id: 2,
      userId: "2",
      date: "23/12/2023",
      time: "5:00 PM",
    },
    {
      id: 3,
      userId: "1",
      date: "25/12/2025",
      time: "7:00 PM",
    },
    {
      id: 4,
      userId: "3",
      date: "31/12/2023",
      time: "4:00 PM",
    },
  ],
  addmeeting: (newVal) =>
    set((store) => ({ meetings: [...store.meetings, newVal] })),
  deletemeeting: (id) =>
    set((store) => ({
      meetings: store.meetings.filter((meeting) => meeting.id !== id),
    })),
  deleteAllmeetingOfPerson: (id) =>
    set((store) => ({
      meetings: store.meetings.filter((meeting) => meeting.userId !== id),
    })),
  updatemeeting: (updatedVal) =>
    set((store) => ({
      meetings: store.meetings.map((meeting) =>
        meeting.id === updatedVal.id ? updatedVal : meeting,
      ),
    })),
  addmeeting_state: false,
  change_addmeeting_state: (val) => set((store) => ({ addmeeting_state: val })),
  addmeeting_userId: null,
  add_addmeeting_userId: (val) => set((store) => ({ addmeeting_userId: val })),
  deletemeeting_state: false,
  change_deletemeeting_state: (val) =>
    set((store) => ({ deletemeeting_state: val })),
  editmeeting_state: false,
  change_editmeeting_state: (val) =>
    set((store) => ({ editmeeting_state: val })),
  editmeeting_id: null,
  add_editmeeting_id: (val) => set((store) => ({ editmeeting_id: val })),
  deletemeeting_id: null,
  add_deletemeeting_id: (val) => set((store) => ({ deletemeeting_id: val })),
}));

export default meetingStore;
