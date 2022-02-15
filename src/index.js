export const mapExample = (names) => {
  return names.map(({ firstName, lastName }) => {
    return `${firstName} ${lastName}`
  })
}

export const forEachExample = (names) => {
  names.forEach(({ firstName }) => {
    console.log(firstName)
  })
}

export const nameFilter = (names, nameToFilter) => {
  return names.filter(({ firstName }) => {
    return firstName === nameToFilter
  })
}

export const nameFinder = (names, nameToFind) => {
  return names.find(({ firstName }) => {
    return firstName === nameToFind
  })
}

export const reducerFromArrayToInt = (values) => {
  return values.reduce((accumulator, { age }) => {
    return accumulator += age
  }, 0)
}

export const reducerFromArrayToObject = (values) => {
  return values.reduce((acc, { age }) => {
    acc.total += age
    return acc;
  }, { total: 0 })
}

export const concatenateUsingSpreadArray = (array1, array2) => {
  return [...array1, ...array2]
}

export const concatenateUsingSpreadObject = (object1, object2) => {
  return { ...object1, ...object2 }
}

export const uniqueWithSet = (values) => {
  const unique = new Set(values.map(({ category }) => {
    return category
  }))
  // return Array.from(unique)
  return [...unique]
}

export const optionalChaining = (values) => {
  values.forEach((person) => {
    console.log(person.hobbies?.hobby2)
  })
}

export const conditionalRendering = (values) => {
  values.forEach((person) => {
    console.log(person.hobbies && person.hobbies.hobby2)
  })
}

export const fetchPromiseExample = () => {
  return fetch("https://type.fit/api/quotes")
    .then((response) => response.json())
    .then((data) => {
      return data
    })
}

export const fetchAsyncExample = async () => {
  try {
    const response = await fetch("https://type.fit/api/quotes")
    const data = await response.json()
    return data
  } catch (error) {
    console.log(error)
  }
}
