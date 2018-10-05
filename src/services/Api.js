const BASE = 'http://localhost:3000'

let getUser = function(id) {
    return fetch(BASE + '/users/' + id)
    .then((resp) => {
        let json = resp.json()
        return json
    })
}

let getHabits = function(userId) {
  return fetch(BASE + '/users/' + userId + '/habits')
  .then((res) => {
    let json = res.json()
    return json
  })
}

let getHabit = function(userId, habitId) {
  return fetch(BASE + '/users/' + userId + '/habits/' + habitId)
  .then((res) => {
    let json = res.json()
    return json
  })
}

let editHabit = function(userId, habit, habitId) {
  return fetch(BASE + '/users/' + userId + '/habits/' + habitId, {
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(habit),
    method: "PATCH"
  })
  .then((res) => {
    let json = res.json()
    return json
  })
}

let postHabit = function(habit) {

  let address = BASE +'/users/'+ habit.habit.user_id+'/habits.json'
  return fetch(address, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(habit)
  })
  .then((res) => {
    let json = res.json()
    return json
  })
}

export {
    getUser, getHabits, postHabit
}
