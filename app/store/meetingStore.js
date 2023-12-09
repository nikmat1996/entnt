import { create } from "zustand";

const meetingStore = create((set) => ({
  meetings: [
    {
      id: 1,
      userId: "2",
      timeStamp: "1702636200",
    },
    {
      id: 2,
      userId: "2",
      timeStamp: "1702355400",
    },
    {
      id: 3,
      userId: "1",
      timeStamp: "1702643400",
    },
    {
      id: 4,
      userId: "3",
      timeStamp: "1704022200",
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

  editmeeting_state: false,
  change_editmeeting_state: (val) =>
    set((store) => ({ editmeeting_state: val })),
  editmeeting_id: null,
  add_editmeeting_id: (val) => set((store) => ({ editmeeting_id: val })),

  deletemeeting_state: false,
  change_deletemeeting_state: (val) =>
    set((store) => ({ deletemeeting_state: val })),
  deletemeeting_id: null,
  add_deletemeeting_id: (val) => set((store) => ({ deletemeeting_id: val })),
}));

export default meetingStore;
