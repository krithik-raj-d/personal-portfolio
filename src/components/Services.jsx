import CardSwap, { Card } from "./CardSwap";

const Services = () => {
  return (
    <div className="bg-[url(/service-bg.jpg)] bg-no-repeat bg-cover bg-center w-full h-screen flex md:justify-end justify-center p-5 md:p-20">
      <div className="relative">
        <CardSwap
          cardDistance={60}
          verticalDistance={70}
          delay={5000}
          pauseOnHover={false}
        >
          <Card customClass="bg-red-500 bg-[url(/mobile-app.jpg)] bg-no-repeat bg-cover bg-center w-full"></Card>
          <Card customClass="bg-red-500 bg-[url(/seo-optimise.jpg)] bg-no-repeat bg-cover bg-center w-full"></Card>
          <Card customClass="bg-red-500 bg-[url(/web-app.jpg)] bg-no-repeat bg-cover bg-center w-full"></Card>
          <Card customClass="bg-red-500 bg-[url(/ui-ux.jpg)] bg-no-repeat bg-cover bg-center w-full"></Card>
        </CardSwap>
      </div>
    </div>
  );
};

export default Services;
