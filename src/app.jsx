function App(){
  const tw = useTweaks();
  return (
    <>
      <Nav/>
      <main>
        <div className="wrap"><Hero animOn={tw.state.heroAnim}/></div>
        <About/>
        <ProductsIntro/>
        <ProductEDM/>
        <ProductMediator/>
        <ProductBDRegions/>
        <ProductMediaReport/>
        <Stats/>
        <Clients/>
        <Team/>
        <FAQ/>
        <Contact/>
      </main>
      <Footer/>
      {tw.visible && <TweaksPanel state={tw.state} set={tw.set}/>}
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>);
