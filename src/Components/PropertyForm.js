import React, { useEffect, useState } from 'react';
import {
  Box,
  Button,
  Input,
  FormControl,
  FormLabel,
  Textarea,
  VStack,
  Image,
  Center,
  Radio,
  RadioGroup,
  HStack,
  Checkbox,
  Alert,
  AlertIcon,
} from '@chakra-ui/react';

const PropertyForm = ({ addProperty }) => {
  const [formSubmitted, setFormSubmitted] = useState(false);


  useEffect(() => {
    console.log('PropertyForm component loaded');
  }, []);

  const [formData, setFormData] = useState({
    image: null,
    beds: 0,
    baths: 0,
    title: '',
    formattedPrice: '',
    description: '',
    propertyType: 'rent',
    newBadge: false,
  });

  const handleChange = (e) => {
    const { name, value, files, type, checked } = e.target;

    if (type === 'file') {
      setFormData((prevData) => ({ ...prevData, [name]: files[0] }));
    } else if (type === 'checkbox') {
      setFormData((prevData) => ({ ...prevData, [name]: checked }));
    } else {
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    }
  };

  const handlePropertyTypeChange = (value) => {
    setFormData((prevData) => ({ ...prevData, propertyType: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addProperty(formData);
    setFormData({
      image: null,
      beds: 0,
      baths: 0,
      title: '',
      formattedPrice: '',
      description: '',
      propertyType: 'rent'    });
  };

  return (
    <Center>
      <Box p={8} borderWidth={1} borderRadius={8} boxShadow="lg">
      {formSubmitted && ( 
          <Alert status="success" mb={4}>
            <AlertIcon />
            Form submitted successfully!
          </Alert>
        )}
        <form onSubmit={handleSubmit}>
          <VStack spacing={4} align="start">
            <FormControl>
              <FormLabel>Upload Image</FormLabel>
              <Input type="file" name="image" accept="image/*" onChange={handleChange} />
              {formData.image && (
                <Center mt={2}>
                  <Image src={URL.createObjectURL(formData.image)} alt="Uploaded" maxH="100px" />
                </Center>
              )}
            </FormControl>

            <FormControl>
              <FormLabel>Beds</FormLabel>
              <Input type="number" name="beds" value={formData.beds} onChange={handleChange} />
            </FormControl>

            <FormControl>
              <FormLabel>Baths</FormLabel>
              <Input type="number" name="baths" value={formData.baths} onChange={handleChange} />
            </FormControl>

            <FormControl>
              <FormLabel>Title</FormLabel>
              <Input type="text" name="title" value={formData.title} onChange={handleChange} />
            </FormControl>

            <FormControl>
              <FormLabel>Formatted Price</FormLabel>
              <Input type="text" name="formattedPrice" value={formData.formattedPrice} onChange={handleChange} />
            </FormControl>

            <FormControl>
              <FormLabel>Description</FormLabel>
              <Textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                resize="vertical"
              />
            </FormControl>
            <FormControl>
              <FormLabel>Property Type</FormLabel>
              <RadioGroup value={formData.propertyType} onChange={handlePropertyTypeChange}>
                <HStack spacing="24px">
                  <Radio value="rent">Rent</Radio>
                  <Radio value="sell">Sell</Radio>
                </HStack>
              </RadioGroup>
            </FormControl>

            <Button type="submit" colorScheme="teal">
              Add Property
            </Button>
          </VStack>
        </form>
      </Box>
    </Center>
  );
};

export default PropertyForm;