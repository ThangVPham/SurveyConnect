function Footer() {
  return (
    <div className="w-full flex justify-center text-xs text-center absolute bottom-2">
      <p className=" ">
        Powered by <i>Survey Connect&#169;. </i> All rights reserved {new Date().getFullYear().toString()}
      </p>
    </div>
  );
}

export default Footer;
