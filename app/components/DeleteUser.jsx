import Button from "./Button";

export default ({person, deleteUser, change_deleteUser_state, deleteAllmeetingOfPerson}) => {
    const handleDelete = () => {
        change_deleteUser_state(false)
        deleteUser(person.id)
        deleteAllmeetingOfPerson(person.id)
    }

    const handleCancel = () => {
        change_deleteUser_state(false)
    }

  return (
    <section className="flex h-[104px] items-center justify-center gap-5 rounded-3xl border border-blue-400 bg-gray-800 px-5 py-2">
        <p className="text-gray-400">DELETE {person.lastName}?</p>
        <Button onClick={handleDelete}>Confirm</Button>
        <Button onClick={handleCancel}>Cancel</Button>
    </section>
  );
};
