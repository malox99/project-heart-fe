import { Stack, Typography } from "@mui/material";
import CustomIcon from "../../components/CustomIcon.compent";
import { colors } from "../../theme/palette";

const ContactUs = () => {
  const ContactDescription = ({
    icon,
    label,
    description,
  }: {
    icon: string;
    label: string;
    description: string;
  }) => {
    return (
      <Stack flexDirection={'row'} alignItems={'center'} gap={6}>
        <Stack flexDirection={'row'} alignItems={'center'}>
          <CustomIcon name={icon} color={colors.secondary} size={25} margin={"0px"}/>
          <Typography variant="caption" width={60} ml={1.5}>{label}</Typography>
        </Stack>
        <Typography variant="caption" fontWeight={500}>{description}</Typography>
      </Stack>
    );
  };

  return (
    <Stack>
      <Typography variant="h5">Contatti</Typography>
      <Stack mt={2} gap={2}>
        <ContactDescription icon="mail_outline" label="Email" description="test@test.test"/>
        <ContactDescription icon="local_phone_outline" label="Telefono" description="333 3333333"/>
        <ContactDescription icon="language_outline" label="Sito web" description="www.test.it"/>
      </Stack>
    </Stack>
  );
};

export default ContactUs;
