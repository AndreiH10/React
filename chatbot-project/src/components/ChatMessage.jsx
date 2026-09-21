import UserProfileImage from '../assets/profile-1.jpg';
import RobotProfileImage from '../assets/robot.png';
import './ChatMessage.css';
import dayjs from 'dayjs';

function ChatMessage(props) {
    const { message, sender, time } = props;

    /*
    if(sender === 'robot'){
      return(
        <div>
          <img src="robot.png" width="50" />
          {message}
        </div>
      )
    }
    */

    return (
        <div className={sender === 'user' ? 'chat-message-user' : 'chat-message-robot'}>
            {sender === 'robot' && (
                <img 
                    src={RobotProfileImage}
                    width="50" 
                    className="chat-message-profile"
                />
            )}
            <div className="chat-message-text">
                {message}
                {time && (
                    <div className='chat-message-time'>
                        {dayjs(time).format('h:mma')}
                    </div>
                )}
            </div>
            {sender === 'user' && (
                <img 
                    src={UserProfileImage} 
                    width="50" 
                    className="chat-message-profile"
                />
            )}
        </div>
    )
}

export default ChatMessage;