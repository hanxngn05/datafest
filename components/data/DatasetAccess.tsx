export default function DatasetAccess() {
  return (
    <section className="bg-black border-2 border-indigo rounded-lg p-8 md:p-10">
      <h2 className="text-3xl font-title font-bold mb-8 text-white">Dataset Access</h2>

      <div className="space-y-6">
        <div>
          <h3 className="text-2xl font-title font-semibold mb-4 text-indigo">Receiving the Data</h3>
          <p className="text-lg text-white/80 leading-relaxed">
            All registered teams will receive access to the dataset during the opening ceremony on Friday, April 10 at 7:00 PM. The data will be distributed via USB drives or a secure download link.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-title font-semibold mb-4 text-indigo">Data Description</h3>
          <p className="text-lg text-white/80 leading-relaxed">
            A detailed data dictionary and schema will be provided alongside the dataset. This documentation will explain variable definitions, data collection methods, and any known limitations or quirks in the data.
          </p>
        </div>
      </div>
    </section>
  )
}
