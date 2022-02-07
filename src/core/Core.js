const Core = () => {

  const render = (template) => {
    document.getElementById('content').innerHTML = template
  }

  return {render}
}

export default Core