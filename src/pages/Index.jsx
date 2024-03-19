import { useNavigate } from "react-router-dom";
import { Button, Container } from "@chakra-ui/react";

function Index() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/dashboard");
  };

  return (
    <Container centerContent>
      <Button mt={4} colorScheme="blue" onClick={handleLogin}>
        Login
      </Button>
    </Container>
  );
}

export default Index;
