import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectedApiIdData } from '../../store/userSlice'

const UserApply = () => {

    const apiIdData = useSelector(selectedApiIdData);
    console.log(apiIdData);

  return (
    <div>UserApply</div>
  )
}

export default UserApply