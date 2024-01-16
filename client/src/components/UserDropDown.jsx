import Shimmer from './Shimmer';
import PropTypes from 'prop-types';

const UserDropDown = ({ users, selectedUserFunc }) => {
  const handleUserSelect = (selectUser) => {
    const selectedUserId = selectUser;
    const selectedUser = users.find(user => user.id === parseInt(selectedUserId));
    selectedUserFunc(selectedUser);
  };

  if (!users) {
    return <Shimmer />;
  }

  return (
    <div>
      <div className='h-[30vh] lg:w-[50%] md:w-[100%] bg-white overflow-auto '>
        {users.map(user => (
          <div className=' hover:bg-slate-300' key={user.id} value={user.id}>
            <div className='w-[100%] cursor-pointer flex items-center' onClick={()=>handleUserSelect(user.id)}>
              <img src={user.image} alt={user.firstName} className=' w-8 h-8 rounded-full mr-2' />
              <div className='flex justify-between w-[100%]'>
                <h3 className='text-lg '>{user.firstName}</h3>
                <p className='text-slate-600 mr-5 font-light'>{user.email}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


UserDropDown.propTypes = {
    users: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired,
        firstName: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        // Add other required properties
      })
    ),
    selectedUserFunc: PropTypes.func.isRequired,
  };
  



export default UserDropDown;
