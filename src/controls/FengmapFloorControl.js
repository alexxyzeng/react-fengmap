import FengmapBaseControl from '../bases/FengmapBaseControl'
import PropTypes from 'prop-types'

class FengmapFloorControl extends FengmapBaseControl {
  static propTypes = {
    ctrlOptions: PropTypes.shape({
      allLayer: PropTypes.bool,
      showBtnCount: PropTypes.number,
      position: PropTypes.number,
      offset: PropTypes.shape({
        x: PropTypes.number,
        y: PropTypes.number
      }),
      imgURL: PropTypes.string
    }).isRequired,
    onFloorChange: PropTypes.func
  }

  load = (map, fengmapSDK, parent) => {
    const { ctrlOptions } = this.props
    if (!parent.isFengmapBase) {
      throw new Error('<FengmapFloorControl /> cannot work with <FengmapFloors />')
    }
    const control = new fengmapSDK.buttonGroupsControl(map, ctrlOptions)
    control.onChange((groups, allLayer) => {
      const { onFloorChange } = this.props
      if (!onFloorChange) {
        return
      }
      onFloorChange({
        floorLevel: map.focusFloor,
        groupId: map.focusGroupID
      })
    })
  }

  render() {
    return null
  }
}

export default FengmapFloorControl
