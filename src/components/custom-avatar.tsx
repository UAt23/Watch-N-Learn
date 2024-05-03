import { Avatar as AntdAvatar, AvatarProps } from 'antd';

type Probs = AvatarProps & {
   name: string;
}

const CustomAvatar = ({ name, style, ...rest }: Probs) => {
   return (
      <AntdAvatar
      alt={'Javascript Mastery'}
      size="small"
      style={
         {
            backgroundColor: "#87d068",
            display: "flex",
            alignItems: "center",
            border: "none"
         }
      }
      >
      JM
      </AntdAvatar>
   )
}

export default CustomAvatar