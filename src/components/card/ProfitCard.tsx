import { Box, Flex, useColorModeValue, Icon, Stat, StatLabel, StatNumber } from '@chakra-ui/react';
import IconBox from 'components/icons/IconBox';
import Card from 'components/card/Card'
import { HSeparator } from 'components/separator/Separator'
import { MdAttachMoney } from 'react-icons/md';

export default function ProfitCard(props: {
  value: string | number;
  description: string;
  value2: string | number;
  description2: string;
  bgColor: string;
	height: string;
	width: string;
}) {

  const { value, description, value2, description2, bgColor, height, width } = props;

  const textColor = '#FFFFFF'
	const textColorSecondary = 'rgb(255, 255, 255, 0.7)';
	const textColorGreen = '#05CD99';
	const textColorRed = '#CD0505';

  const brandColor = useColorModeValue('brand.500', 'white');
  const boxBg = useColorModeValue('secondaryGray.300', 'whiteAlpha.100');

  return (
    <Card p='10px' bgColor={bgColor} h={height} w={width}> 
      <Flex
        my='auto'
        h='100%'
        flexDirection={'column'}
      >
        <Box
          mb={'10'}
        >
          <IconBox
            w='56px'
            h='56px'
            bg={boxBg}
            icon={
              <Icon
                w='32px'
                h='32px'
                as={MdAttachMoney}
                color={brandColor}
              />
            }
          />
        </Box>

        <Box>
          <Stat>
            <StatLabel lineHeight='100%' color={textColor} fontSize={{ base: '44px' }} fontWeight={'700'} mb={'5'}>
              {value}
            </StatLabel>

            <StatLabel lineHeight='100%' color={textColorSecondary} fontSize={{ base: 'small' }} mb={'5'}>
              {description}
            </StatLabel>
          </Stat>

          <HSeparator />

          <Stat>
            <StatLabel lineHeight='100%' color={textColor} fontSize={{ base: '24' }} fontWeight={'bold'} mb={'5'}>
              {value2}
            </StatLabel>

            <StatLabel lineHeight='100%' color={textColorSecondary} fontSize={{ base: 'small' }}>
              {description2}
            </StatLabel>
          </Stat>


        </Box>
      </Flex>
    </Card>
  );
}