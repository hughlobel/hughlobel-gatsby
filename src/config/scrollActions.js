// A list of scroll actions. Connect this page to the AppCommPanel.js doc
import {connect } from 'react-redux';
import OnScreen from 'onscreen'
import {updateComm} from '../store/actions/commBar'

export const ScrollActions = (props) => {

  const os = new OnScreen()
    
  // Generate events on scroll - Projects page demo
  os.on('enter', '.bioP2', (element, event) => {
    props.updateComm(['manual','To hear some recordings of music composed by Hugh Lobel, <a>visit his soundcloud here</a>'])
  });
  os.on('leave', '.bioP2', (element, event) => {
    element.style.color = 'black';
    console.log(`and it's gone!`)
    props.updateComm(['manual', `ok, I get it, you don't want to hear my music. You're not here for that, it's cool.`])
  });
  return(null)
}

const mapStateToProps = (state) => ({
  comm: state.comm
})

const dispatchToProps = (dispatch) => ({
  updateComm: (text) => dispatch(updateComm(text))
})

export default connect(mapStateToProps, dispatchToProps)(ScrollActions);