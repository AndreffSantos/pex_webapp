import { Flex } from '@chakra-ui/react';
import React from 'react';

const HSeparator = (props: { variant?: string; [x: string]: any }) => {
	const { variant, ...rest } = props;
	return <Flex h='3px' w='100%' bg='rgba(255, 255, 255, 0.3)' {...rest} />;
};

const VSeparator = (props: { variant?: string; [x: string]: any }) => {
	const { variant, ...rest } = props;
	return <Flex w='1px' bg='rgba(135, 140, 189, 0.3)' {...rest} />;
};

export { HSeparator, VSeparator };
